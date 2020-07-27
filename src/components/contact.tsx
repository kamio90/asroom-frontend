import React from 'react';
import '../scss/componets/contact.scss';

interface Props {
	data: {
		title: string;
		buttonText: string;
		acceptationText: string;
		colorName: string;
		copyrightText: string;
		copyrightTextContinue: string;
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
			copyrightTextContinue,
		} = this.props.data;

		return (
			<section className='footerContact' id="footer">
				<div className='footerContact__box'>
					<div className='footerContact__box__form'>
						<h2 className='footerContact__box__form__title'>
							{title}
						</h2>
						<span
							className={`footerContact__box__form__line footerContact__box__form__line${colorName}`}
						/>
						<form
							action='https://formspree.io/biuro@financeroom.pl'
							className='footerContact__box__form__card'
							method="POST"
						>
							<input
								type='text'
								className='footerContact__box__form__card__firstName'
								name="imię"
								placeholder={fields.firstName}
							/>
							<input
								type='text'
								name="nazwisko"
								className='footerContact__box__form__card__lastName'
								placeholder={fields.lastName}
							/>
							<input
								type='tel'
								name="telefon"
								className='footerContact__box__form__card__phoneNumber'
								placeholder={fields.phoneNumber}
							/>
							<input
								type='email'
								name="email"
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
									{acceptationText}<a href="/regulamin.docx" download>regulamin</a>, <a href="/polityka-prywatności.docx" download>politykę prywatności</a> oraz <a href="/rodo-ver.1 01.04.2020.docx" download>RODO</a>
								</p>
							</div>
							<button
								type='submit'
								className={`footerContact__box__form__card__button footerContact__box__form__card__button${colorName}`}
							>
								{buttonText}
								<span className={`footerContact__box__form__card__button__line footerContact__box__form__card__button__line${colorName}`} />
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
				<div className='footerContact__copyright'>
					<p>{copyrightText}</p>
					<p>{copyrightTextContinue}<a href="https://itroom.pl" target="_blank">itroom.pl</a></p>
					</div>
			</section>
		);
	}
}
