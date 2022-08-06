import './SearchForm.css';

import React from "react";

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import CheckboxSearch from '../SubstitutionCheckbox/CheckboxSearch/CheckboxSearch';

function SearchForm() {
  return (
    <>
      <section className='search-form'>
        <form className='search-form__form'>
          <div className='search-form__search'>
            <input
              className='search-form__string'
              type='search'
              placeholder={`Фильм`} />
            <button
              className='search-form__button-submit'
              type='submit' />
          </div>
          <FilterCheckbox
            label={'Короткометражки'}
            checked={false}>
            <CheckboxSearch />
          </FilterCheckbox>
        </form>
      </section>
    </>
  )
}

export default SearchForm;