import {
  FC,
  useState,
  useContext,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";

export type ContextProps = {
  disabled: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
};

export type ContextProviderProps = {
  defaultDisabled?: boolean;
  children: any;
};

const contextDefaultValues: ContextProps = {
  disabled: false,
  setDisabled: () => null,
};

export const Context = createContext<ContextProps>(contextDefaultValues);

const FormCustomContextProvider: FC<ContextProviderProps> = ({
  defaultDisabled,
  children,
}) => {
  // Default to editable when no default value is provided
  const [disable, setDisable] = useState<boolean>(defaultDisabled ?? false);

  return (
    <Context.Provider
      value={{
        disabled: disable,
        setDisabled: setDisable,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default FormCustomContextProvider;

export function useFormCustomContext(): ContextProps {
  return useContext(Context);
}
