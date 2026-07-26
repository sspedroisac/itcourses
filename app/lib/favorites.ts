export function getFavoriteCourses() {
  const favoriteCourses = localStorage.getItem(`favorite-courses`);

  const favoriteCoursesJson = favoriteCourses
    ? JSON.parse(favoriteCourses)
    : [];

  return favoriteCoursesJson;
}

export function isCourseFavorite(slug: string) {
  const favoriteCourses = getFavoriteCourses();

  return favoriteCourses.includes(slug);
}

export function toogleFavoriteCourse(slug: string) {
  const favoriteCourses = getFavoriteCourses();

  if (favoriteCourses.includes(slug)) {
    const updatedFavorites = favoriteCourses.filter((s: string) => s !== slug);
    localStorage.setItem(`favorite-courses`, JSON.stringify(updatedFavorites));
  } else {
    favoriteCourses.push(slug);
    localStorage.setItem(`favorite-courses`, JSON.stringify(favoriteCourses));
  }
}
