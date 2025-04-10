import { Tab, Tabs } from "./tabs";

export const Layout = ({ children }: any) => {
  return (
    <main className="flex flex-row ">
      <aside className="w-1/6"></aside>
      <section className="w-5/6 flex flex-col py-20">
        <header>
          <h1></h1>
          <Tabs>
            <Tab></Tab>
          </Tabs>
        </header>
        <div></div>
      </section>
    </main>
  );
};
