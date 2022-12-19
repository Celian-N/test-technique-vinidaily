import { Wine } from "../../types/wines";
import "./WineItem.css";

const formatPairedWith = (value: string[]) => {
return value.join(', ')
};

function WineItem({ wine }: { wine: Wine }) {
  const displayedCaracteristics = [
    {
      label: "Region : ",
      key: "region",
    },
    {
      label: "Age potentiel : ",
      key: "agingPotential",
    },
    {
      label: "Type : ",
      key: "type",
    },
    {
      label: "Variété de grappe : ",
      key: "grapeVarietes",
    },
    {
      label: "Se boie avec : ",
      key: "winePaired",
    },
    {
      label: "Millesime: ",
      key: "millesimed",
    },
    {
      label: "Année: ",
      key: "year",
    },
    {
      label: "Cuve : ",
      key: "cuve",
    },
    {
      label: "Appelation : ",
      key: "appelation",
    },
    {
      label: "Type d'appelation : ",
      key: "appelationType",
    },
    {
      label: "Prix : ",
      key: "price",
    },
    {
      label: "Note : ",
      key: "note",
    },
  ] as { label: string; key: keyof Wine }[];

  return (
    <div className="wine-item">
      <img src={wine.logo} alt={`${wine.name}'s pic`} />
      <div className="wine__informations">
        <div className="wine__informations--title">{wine.name}</div>
        <div className="wine__informations--description">{wine.description}</div>
        {displayedCaracteristics.map((caracteristic) => {
          return (
            !!wine[caracteristic.key] && (
              <div className="wine-infos" key={caracteristic.key}>
                <span>{caracteristic.label}</span>
                <div>
                  {caracteristic.key == "winePaired"
                    ? formatPairedWith(wine[caracteristic.key])
                    : wine[caracteristic.key]}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default WineItem;
