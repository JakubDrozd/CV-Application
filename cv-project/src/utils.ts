import { ChangeEvent } from "react";

export async function handleChange(
  this: any,
  event: ChangeEvent<HTMLInputElement>
) {
  const target = event.target as HTMLInputElement;
  await this.setState({ value: target.value });
  console.log(this.state.value);
}
