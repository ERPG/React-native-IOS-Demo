Command to run React native IOS.
- react-native run-ios
- cmd d or f to open the websites for debbuger.

About components rendering.
there are class base components and functional components.

- componentWillMount: Will render first anything inside that function including Http request.
- state: It`s a method that is use to record and response no triggered events; in order to avoid error of result with http request, initialize the declaretion variables inside states method.( Only for class base components).
- this.setState: use it when you want to change or update properties in the state method. 

About fetching data from request.
- key={}: is used to know wich element of the array is refering to in the http request.(better if the object has an ID propertie)
- to send data from father to child component we use a name if a variable and set iqual to the data we want to send, as a property in the child component tag. Then in the child component we pass the (props) property to the component function to get access to it inside our component.

About Button.
OnPress: property of touchable elements (see react-native library) to equal to a function that will do something whenever the button is clicked.