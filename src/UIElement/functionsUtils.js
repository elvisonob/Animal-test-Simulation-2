export const onHourReduce = (
  animals,
  picture2,
  picture1,
  setAnimals,
  number
) => {
  const updatedReductionMonkeys = animals.map((monkey) => {
    const generatedRandomNumber = Math.floor(Math.random() * 20) + 1; // Generate random number between 0 and 20
    const percentage = (generatedRandomNumber / 100) * monkey.health;
    const currentHealthStatus = monkey.health - percentage; // Ensure health doesn't go below 0

    const updatedStatus =
      currentHealthStatus < number ? (
        <p style={{ color: 'red' }}>Dead</p>
      ) : (
        'Alive'
      );

    const updatedImage = currentHealthStatus < number ? picture2 : picture1;

    return {
      ...monkey,
      health: currentHealthStatus,
      status: updatedStatus,
      image: updatedImage,
    };
  });

  setAnimals(updatedReductionMonkeys);
};

export const onFeedAnimal = (
  animals,
  picture2,
  picture1,
  setAnimals,
  number
) => {
  const feedUpdate = animals.map((monkey) => {
    const feedGeneratedRandomNumber =
      Math.floor(Math.random() * (25 - 10) + 1) + 10;
    const feedPercentage = (feedGeneratedRandomNumber / 100) * monkey.health;
    const increasedHealthStatus = monkey.health + feedPercentage;
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
      ...monkey,
      health: healthCappedAt100,
      status: updatedStatus,
      image: updatedImage,
    };
  });
  setAnimals(feedUpdate);
};
