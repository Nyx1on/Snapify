import { AlbumData } from "@/constants/AlbumData";
import Link from "next/link";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const Card = (props: { albums: AlbumData[] }) => {
  return (
    <ImageList sx={{ width: 900, height: 450 }}>
      {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Latest</ListSubheader>
      </ImageListItem> */}
      {props.albums.map((item) => (
        <Link
          href={"/home/account/my-albums/" + item._id}
          className="flex cursor-pointer"
        >
          <ImageListItem key={item.images[0]}>
            <img
              src={`http://localhost:8000/uploads/${item.images[0]}?w=356&fit=crop&auto=format`}
              srcSet={`http://localhost:8000/uploads/${item.images[0]}?w=356&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className="rounded-lg"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.title}
              className="rounded-lg"
            />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
};

export default Card;
