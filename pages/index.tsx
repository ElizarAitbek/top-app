import { Ptag, Htag, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Ptag size="s">Hello world 's'</Ptag>
      <Ptag>Hello world from default "m"</Ptag>
      <Ptag size="l">Hello world from large</Ptag>
      <Htag tag="h1">Hello headline</Htag>
      <Tag>hello</Tag>
      <Tag color="red" href="google.com">
        link
      </Tag>
      <Tag size="m" color="green">
        link
      </Tag>
      <Tag size="m" color="primary">
        link
      </Tag>
    </>
  );
}
