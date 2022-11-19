import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverViewCard } from "../../../pages/Overview/Styles";
import { OverviewProps } from "../types";

export default function OverviewCard({ property }: OverviewProps) {
  const { icon,fas, title, discretion } = property;

  return (
    <OverViewCard>
      <FontAwesomeIcon icon={fas}/>
      <h2>{title}</h2>
      <p>{discretion}</p>
    </OverViewCard>
  );
}
