export class CounterService {
  activeToInActiveCounter = 0;
  inActiveToActiveCounter = 0;

  increamentActiveToInActiveCounter() {
    this.activeToInActiveCounter++;
    // console.log('Active user : ' + this.activeToInActiveCounter);
  }

  increamentInActiveToActiveCounter() {
    this.inActiveToActiveCounter++;
    // console.log('Active user : ' + this.inActiveToActiveCounter);
  }
}
