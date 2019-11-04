import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data.filter((name) => {
			return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map((directory, index) => {
			return (
				<tr key={directory.id}>
					onClick={() => selectedUpdate(index)}
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
