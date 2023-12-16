//This is a function I wrote to generate a random number between 0 and 20 and reduce the current health base on the percentage of the random number generated.
// I included parameters in order to make the function resuable with two types of animals (Monkey and Giraffe)
export const onHourReduce = (
  animals,
  picture2,
  picture1,
  setAnimals,
  number
) => {
  const updatedReductionMonkeys = animals.map((animal) => {
    const generatedRandomNumber = Math.floor(Math.random() * 20) + 1;
    const percentage = (generatedRandomNumber / 100) * animal.health;
    const currentHealthStatus = animal.health - percentage;

    const updatedStatus =
      currentHealthStatus < number ? (
        <p style={{ color: 'red' }}>Dead</p>
      ) : (
        'Alive'
      );

    const updatedImage = currentHealthStatus < number ? picture2 : picture1;

    return {
      ...animal,
      health: currentHealthStatus,
      status: updatedStatus,
      image: updatedImage,
    };
  });

  setAnimals(updatedReductionMonkeys);
};

//This is a function I wrote to generate a random number between 10 and 25, and increase the current health base on the percentage of the random number generated.
// I included parameters in order to make the function resuable with two types of animals (Monkey and Giraffe)

export const onFeedAnimal = (
  animals,
  picture2,
  picture1,
  setAnimals,
  number
) => {
  const feedUpdate = animals.map((animal) => {
    const feedGeneratedRandomNumber =
      Math.floor(Math.random() * (25 - 10) + 1) + 10;
    const feedPercentage = (feedGeneratedRandomNumber / 100) * animal.health;
    const increasedHealthStatus = animal.health + feedPercentage;
    const healthCappedAt100 =
      increasedHealthStatus > 100 ? 100 : increasedHealthStatus;
    const updatedStatus =
      increasedHealthStatus < number ? (
        <p style={{ color: 'red' }}>Dead</p>
      ) : (
        'Alive'
      );

    const updatedImage = increasedHealthStatus < number ? picture2 : picture1;

    return {
      ...animal,
      health: healthCappedAt100,
      status: updatedStatus,
      image: updatedImage,
    };
  });
  setAnimals(feedUpdate);
};

//This is a function I wrote to generate a random number between 0 and 20 and reduce the current health base on the percentage of the random number generated.
// I included parameters in order to make the function resuable and this function only applies to the Elephant animal.
// The Elephant animal functionality has a slight difference compared to Monkey and Giraffe, and this is why i wrote a different function for it.
export const onHourReduceElephant = (
  animals,
  hasWalkStatus,
  setHasWalkStatus,
  picture2,
  picture1,
  setAnimals
) => {
  const updatedReductionElephants = animals.map((elephant) => {
    const generatedRandomNumber = Math.floor(Math.random() * 20) + 1;
    const percentage = (generatedRandomNumber / 100) * elephant.health;
    const currentHealthStatus = elephant.health - percentage;

    let updatedStatus;

    if (!hasWalkStatus && currentHealthStatus < 69) {
      updatedStatus = <p style={{ color: 'orange' }}>Can't walk</p>;
      setHasWalkStatus(true);
    } else {
      updatedStatus =
        currentHealthStatus < 69 ? (
          <p style={{ color: 'red' }}>Dead</p>
        ) : (
          'Alive and can walk'
        );
    }

    const updatedImage = currentHealthStatus < 69 ? picture2 : picture1;

    return {
      ...elephant,
      health: currentHealthStatus,
      status: updatedStatus,
      image: updatedImage,
    };
  });

  setAnimals(updatedReductionElephants);
};

//This is a function I wrote to generate a random number between 10 and 25 and increases the current health base on the percentage of the random number generated.
// I included parameters in order to make the function resuable and this function only applies to the Elephant animal.
// The Elephant animal functionality has a slight difference compared to Monkey and Giraffe, and this is why i wrote a different reusable function for it.
export const onFeedAnimalElephant = (
  animals,
  picture2,
  picture1,
  setAnimals,
  number
) => {
  const feedUpdate = animals.map((elephant) => {
    const feedGeneratedRandomNumber =
      Math.floor(Math.random() * (25 - 10) + 1) + 10;
    const feedPercentage = (feedGeneratedRandomNumber / 100) * elephant.health;
    const increasedHealthStatus = elephant.health + feedPercentage;
    const healthCappedAt100 =
      increasedHealthStatus > 100 ? 100 : increasedHealthStatus;
    const updatedStatus =
      increasedHealthStatus < number ? (
        <p style={{ color: 'orange' }}>Can't walk</p>
      ) : (
        'Alive and can walk'
      );

    const updatedImage = increasedHealthStatus < number ? picture2 : picture1;

    return {
      ...elephant,
      health: healthCappedAt100,
      status: updatedStatus,
      image: updatedImage,
    };
  });
  setAnimals(feedUpdate);
};
