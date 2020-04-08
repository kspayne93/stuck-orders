import React from 'react';
import './ApprovalDayCountPanel.scss';

import { ResponsiveBar } from '@nivo/bar';

export default function ApprovalDayCountPanel(props) {
	const theme = {
		axis: {
			ticks: {
				text: {
					fill: 'white',
					fontSize: '.9rem',
				},
			},
			legend: {
				text: {
					fill: 'white',
					fontSize: '1rem',
				}
			},
		}
	};

	const colors = {
		'0': '#FFF7FB',
		'1': '#E7E1EF',
		'2': '#D0D1E6',
		'3': '#A6BDDB',
		'4': '#67A9CF',
		'5': '#3690C0',
		'6': '#02818A',
		'7': '#016C59',
		'8+': '#014636'
	};

	const getColors = bar => colors[bar.indexValue];

	return (
		<div className='dashboard-panel approval-day-count-panel'>
			<p className='panel-header'>Approval Age</p>
			<div className='chart-container'>
				<ResponsiveBar
					data={props.approvalDayCount}
					keys={[ 'Day' ]}
					indexBy="day"
					margin={{ top: 5, right: 0, bottom: 85, left: 50 }}
					padding={0.3}
					layout="vertical"
					// colors={{ scheme: 'purple_blue_green' }}
					colors={getColors}
					colorBy='index'
					theme={theme}
					enableGridX={false}
					enableGridY={true}
					axisTop={null}
					axisRight={null}
					axisBottom={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: -0,
							legend: 'Days',
							legendPosition: 'middle',
							legendOffset: 70,
					}}
					axisLeft={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Total Orders',
							legendPosition: 'middle',
							legendOffset: -40,
					}}
					labelSkipWidth={12}
					labelSkipHeight={12}
					labelTextColor={'black'}
					// legends={[
					// 		{
					// 			dataFrom: 'keys',
					// 			anchor: 'bottom-right',
					// 			direction: 'column',
					// 			justify: false,
					// 			translateX: 120,
					// 			translateY: 0,
					// 			itemsSpacing: 2,
					// 			itemWidth: 100,
					// 			itemHeight: 20,
					// 			itemDirection: 'left-to-right',
					// 			itemOpacity: 0.85,
					// 			itemTextColor: 'white',
					// 			symbolSize: 20,
					// 			effects: [
					// 				{
					// 						on: 'hover',
					// 						style: {
					// 							itemOpacity: 1
					// 						}
					// 				}
					// 			]
					// 		}
					// ]}
					// defs={[
					// 	{
					// 		id: 'lines',
					// 		type: 'patternLines',
					// 		background: 'white',
					// 		color: 'inherit',
					// 		rotation: -45,
					// 		lineWidth: 7,
					// 		spacing: 8,
					// 	},
					// 	linearGradientDef('gradientA', [
					// 		{ offset: 0, color: 'inherit' },
					// 		{ offset: 0, color: 'inherit', opacity: .75}
					// 	])
					// ]}
					// fill={[
					// 	{
					// 		match: {
					// 			id: 'Non-Expedited'
					// 		},
					// 		id: 'gradientA'
					// 	}
					// ]}
					animate={true}
					motionStiffness={90}
					motionDamping={15}
				/>
			</div>
		</div>
	)
}
