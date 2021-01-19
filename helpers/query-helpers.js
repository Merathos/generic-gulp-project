export const queryHelpers = {
  checkTagActive(arr, slug) {
    if (Array.isArray(arr)) {
      if (arr.includes(slug)) return true;
    }
    if (arr === slug) return true;
    return false;
  },

  generateNewTags(arr, slug, isActive) {
    if (Array.isArray(arr)) {
      if (isActive) {
        return arr.filter(item => item !== slug);
      }
      return [...arr, slug].filter(i => i && i.length > 0);
    }
    if (isActive) {
      return [slug].filter(i => i !== slug);
    }
    return [arr, slug].filter(i => i && i.length > 0);
  },

  checkCategoryLength(arr) {
    if (Array.isArray(arr)) {
      return arr.length;
    }
    if (typeof arr === 'string') {
      return 1;
    }
    return null;
  },

  deleteCategoryFromQuery(obj, slug) {
    const query = { ...obj };
    if (Array.isArray(slug)) {
      delete query.min;
      delete query.max;
    } else {
      delete query[slug];
    }
    return query;
  },
};
