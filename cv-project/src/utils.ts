import { ChangeEvent } from "react";

export function handleChange(this: any, event: ChangeEvent<HTMLInputElement>) {
  const target = event.target as HTMLInputElement;
  this.setState({ value: target.value });
  console.log(this.state.value);
}

export function handleSubmit(this: any, event: any) {
  event.preventDefault();
  if (this.state.isEditable) {
    this.setState({ isEditable: false });
  } else {
    this.setState({ isEditable: true });
  }
}
