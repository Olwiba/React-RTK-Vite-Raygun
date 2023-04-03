import { ReactNode } from "react";

// Styles
import '../styles/css/tailwind.css'
import '../styles/css/style.css'

type Props = {
  children: ReactNode;
}

function Base({ children }: Props) {
  return (
    <main className={'app'}>
      {children}
    </main>
  );
}

export default Base