import React from "react";

const Ingredients = ({ meal }) => {
  return (
    <div>
      <h3>Ingredients</h3>
      {meal === "плов" ? (
        <p>
          Ингредиенты: 1000 г мяса, 700 г риса, 600 г моркови, 400 г лука, 200
          мл растительного масла, 1 ст. л. зиры (кумин), 1 ч. л. куркумы (без
          горки), 1-3 головки чеснока, соль,перец
        </p>
      ) : null}
      {meal === "пельмени" ? (
        <p>
          Ингредиенты: 4 стакана молоко, 100 мл вода, 100 мл яйцо, 1 шт соль, 1
          ч. л. Для начинки 600 г говядина, 400 г лук репчатый, 3 шт соль
          крупная.
        </p>
      ) : null}{" "}
      {meal === "манты" ? (
        <p>
          мука 300гр. соль 1ч.л. вода тёплая для начинки: говяжий фарш 500гр.
          репчатый лук 4шт. соль 1\2ч.л. специя для мясного фарша перцы молотые
          чёрный и красный
        </p>
      ) : null}
    </div>
  );
};

export default Ingredients;
