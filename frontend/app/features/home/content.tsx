import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

const HomeContent = ({ musics }: any) => {
  return (
    <div className="max-h-[50vh] flex flex-col gap-4 w-full">
      <h2>Content of the channel</h2>
      <Table>
        <TableBody>
          {musics.map(({ id, media, views }: any) => (
            <TableRow
              key={`${id}-${media}`}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=" + media.resource_id
                )
              }
            >
              <TableCell className="flex flex-col">
                <img src={media.image} width={50} height={50} />
              </TableCell>
              <TableCell>
                <h1>{media.title}</h1>
              </TableCell>
              <TableCell>
                <p>{views}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HomeContent;
