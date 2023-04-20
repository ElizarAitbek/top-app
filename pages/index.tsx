import { Button } from "@components/index";

export default function Home(): JSX.Element {
   return (
      <>
         <Button appearance="primary" arrow="right">
            Click me
         </Button>
         <Button appearance="ghost" arrow="down">
            Click me
         </Button>
      </>
   );
}
