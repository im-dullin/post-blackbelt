import Header from "./Header";

export default function DiaryHeader({
  handleGoBack,
  handleUpdate,
  handleRemove,
}) {
  const headerInfo = {
    left: {
      icon: "chevron-left",
      iconColor: "black",
      onPress: handleGoBack,
    },
    title: "Diary",
    right: {
      icon: "more-vert",
      iconColor: "black",
      onPress: handleUpdate,
    },
  };
  return <Header headerInfo={headerInfo} />;
}
