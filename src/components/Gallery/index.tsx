import EventListRenderer from "@components/EventListRenderer";
import { useApiCallRender } from "@hooks";
import { useAppSelector } from "@store/hooks";
import { SearchEvent } from "@type/schemas";

const map = {
  NOT_ASKED: () => <div>Not asked</div>,
  PENDING: () => <div>Pending</div>,
  ERROR: (error: string) => <div>Error: {error}</div>,
  SUCCESS: (data: SearchEvent[]) => <EventListRenderer events={data} />
};
const Gallery: React.FC = () => {
  const { content } = useAppSelector((state) => state.searchEvent);
  return useApiCallRender(map)(content);
  // console.log("***", event.content);
  // return render(event.content);
};

export default Gallery;
