/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cellphone = {
	name: "Akeel's iPhone",
	model: "iPhone 6s Plus",
	gigsMemory: 16,
	storageGigs: 64,
	color: "space gray",
	hasHeadphoneJack: true,
	hasBatteryJack: true,
	hasUSBConnector: false,
	volBtns: true,
	appleBtn: true,
	pwrBtn: true,
	DoNotDisturb: "on",
	allTouchDisplay: false,
	isUnlocked: false,
	toggleLocked: function(lockStatus) {
		this.isUnlocked = lockStatus;
	},
	secureInfo: {
		version: "iOS 13.7",
		telNum: "+1 (347) 488-4891",
		serialNum: "FCJTQ29BHFLX",
		IMEI: "35 571907 052061 0",
		PIN: 703519,
	},
	isCharging: false,
	toggleCharger: function(chargingStatus) {
		this.isCharging = chargingStatus;
	},
	display: "inactive",
	toggleActivity: function(displayStatus) {
		this.display = displayStatus;
		if (displayStatus != "inactive") {
			displayStatus = "active";
		};
	},
	inAirplaneMode: false,
	toggleAirplaneMode: function(airplaneModeStatus) {
		this.inairplaneMode = airplaneModeStatus;
	},
	connectionState: {
		WiFi: true,
		cellData: true,
		bluetooth: false,
		hotspot: false,
	},
	newConnectionState: function(WifiOn, usingCellData, bluetoothOn, hotspotOn) {
		this.connectionState.Wifi = WiFiOn;
		this.connectionState.cellData = usingCellData;
		this.connectionState.bluetooth = bluetoothOn;
		this.connectionState.hotspot = hotspotOn;
	},
	headphonesConnected: false,
	toogle headphones: function(headphonesPlugIn) {
		this.headphonesConnected = headphonesPlugIn;
	},
	volLvl: 50,
	volUp: false,
	volDwn: false,
	toggleVolume: function(volUpState, volDwnState) {
		this.volUp = volUpState;
		this.volDwn = volDwnState;
	},
	newVolLvl: function(volUp, volDwn) {
		while (0 <= volLvl && volLvl <= 100) {
			if (volUpState == true) {
				volLvl += 10;
				break;
			} else if (volDwnState == true) {
				volLvl -= 10;
				break;
			} else {
				break;
			}
		}
	},
};

console.log("the cellphone object: ", cellphone);
console.log(cellphone.secureInfo);
console.log(cellphone.isUnlocked);
console.log(cellphone.isCharging);
console.log(cellphone.display);
console.log(cellphone.inAirplaneMode);
console.log(cellphone.connectionState);
console.log(cellphone.headphonesConnected);
console.log(cellphone.volLvl);

const pillow = {
	name: "chair cushion",
	shape: "square",
	dimensions: {
		length: 50,
		width: 50,
	},
	color: "brown",
	hardness: "soft",
	interiorMaterial: "sponge",
	feel: "fluffy",
	isComfortable: true,
	hasZipper: true,
};

console.log("The pillow object: ", pillow);
console.log(pillow.name);
console.log(pillow.shape);
console.log(pillow.dimensions);
console.log(pillion.color);
