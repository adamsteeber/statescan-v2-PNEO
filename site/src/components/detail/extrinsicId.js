import { currencify } from "../../utils";
import { ColoredInterLinkWithCopy } from "../styled/link";

export default function DetailedExtrinsicId({ blockHeight, id }) {
  return (
    <ColoredInterLinkWithCopy
      to={`/extrinsics/${blockHeight}-${id}`}
      render={() => `${currencify(blockHeight)}-${id}`}
    >
      {`${blockHeight}-${id}`}
    </ColoredInterLinkWithCopy>
  );
}
