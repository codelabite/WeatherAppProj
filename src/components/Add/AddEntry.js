import React from "react";

function AddEntry() {
  return (
    <div>
      <form>
        <input placeholder="Name" name="name" type="text" />
        <input placeholder="Email" name="email" type="email" />
        <input placeholder="Detail" name="detail" type="text" />
        <input placeholder="Image" name="img" type="file" />
      </form>
    </div>
  );
}

export default AddEntry;
