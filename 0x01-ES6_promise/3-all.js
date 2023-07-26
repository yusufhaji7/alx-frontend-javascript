import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    let firstName;
    let lastName;
    let body;

    const up = uploadPhoto();
    const cu = createUser();

    return Promise.all([up, cu]).then((data) => {
	body = data[0].body;
	firstName = data[1].firstName;
	lastName = data[1].lastName;
	console.log(`${body} ${firstName} ${lastName}`);
    }).catch(() => {
	console.log('Signup system offline');
    });
}
