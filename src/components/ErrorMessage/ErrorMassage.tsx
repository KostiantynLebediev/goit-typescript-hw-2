import css from "./ErrorMassage.module.css";
import { ErrorMessageProps } from "./ErrorMassage.types";

export default function ErrorMessage({ errorMessage }:ErrorMessageProps) {
  return <p>{errorMessage}</p>;
}