import React from 'react';
import './Select.scss';
import Icon from '../Icon/Icon';
import Option from '../Option/Option';
import classnames from 'classnames';
import { SelectOption } from '../../../utils/types';

export type Props = {
  placeholder?: string;
  className? : string;
  options: Array<SelectOption>;
  onChange: (selectedOption: SelectOption) => void;
};

const Select: React.FC<Props> = ({
  placeholder = 'Выберите вариант',
  className = '',
  options,
  onChange
}) => {
  const [isSelectOpened, setIsSelectOpened] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<SelectOption>({
    id: 0,
    value: ''
  });

  const selectClassName: string = classnames('select', {
    className: className
  });

  const dropdownClassName: string = classnames('select__dropdown', {
    'select__dropdown_opened': isSelectOpened
  });

  const iconClassName: string = classnames('select__icon', {
    'select__icon_opened': isSelectOpened
  });

  const handleOptionClick = (selectedOption: SelectOption): void => {
    onChange(selectedOption);
    setIsSelectOpened(false);
    setSelectedOption(selectedOption);
  };

  return (
    <div className={selectClassName}>
      <div className="select__container">
        <div
          className="select__input"
          onClick={() => setIsSelectOpened(!isSelectOpened)}
        >
          <span className="select__value">
            {selectedOption.value ? selectedOption.value : placeholder}
          </span>
          <Icon
            className={iconClassName}
            name='arrow'
          />
        </div>
        <div className={dropdownClassName}>
          <ul className="select__list">
            {
              options.map((option: SelectOption) =>
                <Option
                  key={option.id}
                  option={option}
                  onChange={handleOptionClick}
                />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Select;
