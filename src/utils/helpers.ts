import {
  Book,
  DateTimeFormatOptions,
  Option
} from "./types";

// формирование option для select
export const setOptions = (array: Array<Book>, optionName: string): Array<Option> => {
  const optionNamesArray: Array<string> = array.map((item: any) => item[optionName]);
  const arrayWithoutRepeat: Array<string> = Array.from(new Set(optionNamesArray));
  const optionsArray: Array<Option> = [];
  arrayWithoutRepeat.forEach((item: string) => {
    const option: any = {};
    option.value = item;
    option.label = item;
    optionsArray.push(option);
  });
  return optionsArray;
};

// приведение даты к читаемому формату
export const setCorrectDate = (cardDate: string): string => {
  const dateOptions: DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
  };
  const articleDate: Date = new Date(cardDate);
  const dayAndMonth: string = articleDate.toLocaleString('ru', dateOptions);
  const correctArticleDate: string = `${dayAndMonth}, ${articleDate.getFullYear()}`;
  return correctArticleDate;
};
