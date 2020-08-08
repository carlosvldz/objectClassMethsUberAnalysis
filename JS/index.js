var car = new Car("AW456", new Account("Andres Herrera", "QWE234"))
car.passenger = 4
car.printDataCar()

var uberX = new UberX("AW456", new Account("Andrea Ferran", "ANDA765"), "Chevrolet", "Spark")
uberX.passenger = 4
uberX.printDataCar()

var uberPool = UberPool("AW123", new Account("Carlos Sanchez", "TYU234"), "Volkswagen", "Jetta")
uberPool.passenger = 2
uberPool.printDataCar()