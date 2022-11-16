import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverviewWrapper } from "./Styles";

export default function Overview() {
  return <OverviewWrapper>
    <div>
    <FontAwesomeIcon icon={faUserGroup} />
    </div>
    <h2></h2>
  </OverviewWrapper>
}
