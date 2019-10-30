// selectors
export const getSearchStrong = state => state.searchString;
export const countVisibleCards = ({cards, searchString}) => cards.length.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;
// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

