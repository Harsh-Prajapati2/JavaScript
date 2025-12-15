
//Create your constructor funtion with the name Shipment
function Shipment(id,location,destination,status,resources=[]){
    this.id = id;
    this.location = location;
    this.destination = destination;
    this.status = status;
    this.resources = resources;
}
//Add the updateStatusAndResources using the object prototype
Shipment.prototype.updateStatusAndResources = function(new_status,updated_resources){
    this.status = new_status;
    this.resources = updated_resources;
}
//Add the assignResource methods through Object prototype
Shipment.prototype.assignResources = function(...append_resources){
    this.resources.push(...append_resources);
}

//Create the object literal with tthe name TrackingSystem
const TrackingSystem = {
    shipments: [],
    updateStatus: function(id,status){
        for(let i=0;i<this.shipments.length;i++){
            if(this.shipments[i].id == id){
                this.shipments[i].status = status;
            }
        }
    },
    viewShipment: function(id){
        const {id:view_id,resources: view_resources ,location:view_location,destination:view_destination,status:view_status} = this.shipments.find(shipment => {
            if(shipment.id === id) {
                return shipment;
            }
        });
        console.log(`Id : ${view_id}\nStatus : ${view_status}\nResources : ${view_resources}\nLocation : ${view_location}\nDestination : ${view_destination}`);   
    }
}
// return {Shipment,TrackingSystem};
//do not modify any other code.


// function main(){
const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route",["Driver", "Truck"]);
shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
shipment1.assignResources("Worker", "Pallets");

const shipment2 = new Shipment ("67890", "Chicago", "Miami", "In transit",["Forklift"]);
shipment2.updateStatusAndResources("In transit", ["Driver"]);

TrackingSystem.shipments.push(shipment1, shipment2);
TrackingSystem.updateStatus("12345", "Delivered");
TrackingSystem.viewShipment("12345");

// }