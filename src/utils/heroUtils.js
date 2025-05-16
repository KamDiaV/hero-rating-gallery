export function formatHeroStats(hero) {
  return [
    { label: 'Вселенная',    value: hero.universe },
    { label: 'Альтер эго',     value: hero.alterego },
    { label: 'Род деятельности', value: hero.occupation },
    { label: 'Друзья',         value: hero.friends },
    { label: 'Суперсилы',      value: hero.superpowers },
  ];
}
