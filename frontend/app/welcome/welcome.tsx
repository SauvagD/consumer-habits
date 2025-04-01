import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

/*

    {
        "id": 2,
        "user": {
            "id": 1,
            "email": "test@example.com",
            "password": "hashed_password",
            "username": "testuser",
            "createdAt": "2025-03-30T13:24:14.256Z"
        },
        "media": {
            "id": 1,
            "title": "01 Hans Zimmer & Bryan Adams - Spirit: Stallion Of The Cimarron - Homeland / Here I Am",
            "origin": "youtube",
            "resource_id": "altijBRWFOI",
            "image": "https://i.ytimg.com/vi/altijBRWFOI/default.jpg",
            "type": "music"
        },
        "views": 3,
        "lastViewedAt": "2025-03-30T17:45:07.545Z"
    },

*/

// Je veux l'image, le titre, l'url en dessous, le nombre de vue

export function Welcome({ data }: any) {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="max-w-[800px] overflow-scroll">
        <Table>
          <TableBody>
            {data.map(({ id, media, views }: any) => (
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
    </main>
  );
}
