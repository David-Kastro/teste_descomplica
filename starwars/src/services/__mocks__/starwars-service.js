const fakeData = {
  data: {
    results: [
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
      {name: "Obi-Wan Kenobi", eye_color: "blue-gray"},
    ]
  }
}

export const people = async () => {
  return await new Promise(resolve => {
    resolve(fakeData);
  });
}