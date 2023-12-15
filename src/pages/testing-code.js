const onHourReduce = () => {
  const generatedRandomNumber = Math.floor(Math.random() * 20) + 1;
  const percentage = (generatedRandomNumber / 100) * healthStatus;
  const currentHealthStatus = healthStatus - percentage;
  if (currentHealthStatus < 70) {
    setActive(<p style={{ color: 'Orange' }}>Can't walk</p>);
  }

  setHealthStatus(currentHealthStatus);

  if (healthStatus < 70) {
    setActive(<p style={{ color: 'red' }}>Dead</p>);
  }
};
