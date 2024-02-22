import React, { useContext } from "react";
import Card from "../UI/Card";
import MedicDisplay from "./MedicDisplay";
import ContextApi from "../../Store/ContextApi";
import classes from "./MedicList.module.css";

const MedicList = (props) => {
  const contextApi = useContext(ContextApi);

  const items = contextApi.medicItems;
  return (
    <Card className={classes.frame}>
      <ul>
        {items.map((medic) => (
          <MedicDisplay key={medic.id} details={medic} />
        ))}
      </ul>
    </Card>
  );
};

export default MedicList;
