import React from 'react';
import '../scss/componets/contact.scss';

interface Props {
	data: {
		title: string;
		buttonText: string;
		acceptationText: string;
		colorName: string;
		copyrightText: string;
		addressInfo: {
			city: string;
			street: string;
			phoneNumber: string;
		};
		fields: {
			firstName: string;
			lastName: string;
			email: string;
			phoneNumber: string;
			message: string;
		};
	};
}

export default class ContactComponent extends React.Component<Props, any> {
	render() {
		const {
			title,
			buttonText,
			colorName,
			acceptationText,
			copyrightText,
			addressInfo,
			fields,
		} = this.props.data;

		return (
			<section className='footerContact'>
				<div className='footerContact__box'>
					<div className='footerContact__box__form'>
						<h2 className='footerContact__box__form__title'>
							{title}
						</h2>
						<span
							className={`footerContact__box__form__line footerContact__box__form__line${colorName}`}
						/>
						<form
							action=''
							className='footerContact__box__form__card'
						>
							<input
								type='text'
								className='footerContact__box__form__card__firstName'
								placeholder={fields.firstName}
							/>
							<input
								type='text'
								className='footerContact__box__form__card__lastName'
								placeholder={fields.lastName}
							/>
							<input
								type='tel'
								className='footerContact__box__form__card__phoneNumber'
								placeholder={fields.phoneNumber}
							/>
							<input
								type='email'
								className='footerContact__box__form__card__email'
								placeholder={fields.email}
							/>
							<textarea
								name='message'
								id=''
								className='footerContact__box__form__card__message'
								placeholder={fields.message}
							></textarea>
							<div className='footerContact__box__form__card__regulations'>
								<input
									type='checkbox'
									className='footerContact__box__form__card__regulations__check'
								/>
								<p className='footerContact__box__form__card__regulations__checkInfo'>
									{acceptationText}
								</p>
							</div>
							<button
								type='submit'
								className='footerContact__box__form__card__button'
							>
								{buttonText}
								<span className='footerContact__box__form__card__button__line' />
							</button>
						</form>
					</div>
					<div className='footerContact__box__info'>
						<p className='footerContact__box__info__city'>
							{addressInfo.city}
						</p>
						<p className='footerContact__box__info__street'>
							{addressInfo.street}
						</p>
						<p className='footerContact__box__info__phoneNumber'>
							{addressInfo.phoneNumber}
						</p>
					</div>
				</div>
				<div className='footerContact__copyright'>{copyrightText}</div>
			</section>
		);
	}
}
