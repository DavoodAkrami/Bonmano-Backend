module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    
    // Generate SKU if not provided
    if (!data.sku) {
      // Get first 3 letters of english name
      const namePrefix = data.englishName.substring(0, 3).toUpperCase();
      // Get first 3 letters of category
      const categoryPrefix = data.category.substring(0, 3).toUpperCase();
      // Generate random 4 digit number
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      
      // Combine to create SKU
      data.sku = `${namePrefix}-${categoryPrefix}-${randomNum}`;
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;
    
    // Only generate new SKU if english name or category changed
    if (data.englishName || data.category) {
      const namePrefix = (data.englishName || event.params.where.englishName).substring(0, 3).toUpperCase();
      const categoryPrefix = (data.category || event.params.where.category).substring(0, 3).toUpperCase();
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      
      data.sku = `${namePrefix}-${categoryPrefix}-${randomNum}`;
    }
  }
}; 