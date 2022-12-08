import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";

const ICON_OPACITY = {
  INACTIVE: 0.3,
  ACTIVE: 1,
};

// const items = [0, 0, 0, 0, 0, 0];
export default function ListPicker({ items, dispatch, getCurrIndex, jsx }) {
  const opacityArr = Array(items.length).fill(ICON_OPACITY.INACTIVE);
  const [iconsOpacity, setIconOpacity] = useState(opacityArr);
  const storeDiary = useSelector((state) => state.editDiary);

  useEffect(() => {
    const i = getCurrIndex(storeDiary);
    updateActiveIconOpacity(i);
  }, [storeDiary]);

  useEffect(() => {}, [iconsOpacity]);

  const updateActiveIconOpacity = (i) => {
    setIconOpacity(() => {
      const result = opacityArr;
      result[i] = ICON_OPACITY.ACTIVE;
      return result;
    });
  };
  const handleOnPress = (CAT, i) => {
    updateActiveIconOpacity(i);
    dispatch(CAT.ID);
  };
  return (
    <>
      {items.map((CAT, i) => {
        return (
          <Pressable
            key={CAT.ID}
            style={{ opacity: iconsOpacity[i] }}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={handleOnPress.bind(this, CAT, i)}
          >
            {jsx(CAT)}
          </Pressable>
        );
      })}
    </>
  );
}
