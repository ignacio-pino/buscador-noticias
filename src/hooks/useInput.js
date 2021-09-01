import React, { useState } from "react";

const useInput = (stateInicial) => {
  // state del hook

  const [state, setState] = useState(stateInicial);

  const InputTema = () => (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="text"
          className="validate"
          id="tema"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </div>
    </div>
  );

  return [state, InputTema];
};

export default useInput;