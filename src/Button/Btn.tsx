type ButtonVariantProp = {
  name: string;
  type: boolean | string;
  backgroundColor: string;
  callback: (att: boolean | string) => void;
};

export const Btn = ({
  name,
  type,
  backgroundColor,
  callback,
}: ButtonVariantProp) => {
  return (
    <button
      onClick={() => callback(type)}
      style={{ backgroundColor: backgroundColor }}
    >
      {name}
    </button>
  );
};
