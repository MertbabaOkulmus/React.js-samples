import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Attachment} from '../Attachment';
import styled from 'styled-components';
import { IconInbox, IconInboxAdd} from '../Svg';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import {UserContext} from "../UserContext";
import Undraw_cloud from "../icons/undraw_cloud_files_wmo8.svg";

const Panel = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-around;
	justify-items: 'space-between';
	min-height: 40px;
	width: 600px;
    height: 50px;
    padding: 20px;
	background-image: linear-gradient(90deg,rgb(218, 17, 85), rgb(241, 44, 51));
    position: relative;
    margin: auto;
	border-radius:20px 20px 0px 0px;	

	:after,
	:before {
		box-sizing: border-box;
		background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.02));
		background-position-x: initial;
		background-position-y: initial;
		background-size: initial;
		background-attachment: initial;
		background-origin: initial;
		background-clip: initial;
		background-color: transparent;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.85;
	}
`;

const Text = styled.p`
	//color: theme.palette.neutralLight,
	// font-size: 14px;
	font-weight: 400;
	align-self: center;
	color:#fff;
`;

const Dropzone = forwardRef(({ className, onChange, horizontal }: any, ref: any) => {
	const [uploadFile, setUploadFile] = useState<any>(null);

	const onDrop = useCallback(acceptedFiles => {
			onChange(acceptedFiles[0]);
		setUploadFile({
			file: acceptedFiles[0],
			fileName: acceptedFiles[0].name,
			percentage: 0,
			start: false,
			done: false,
		});
	}, []);

	const onCancel = () => {
		onChange(undefined);
		setUploadFile(null);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
	});

	useImperativeHandle(ref, () => ({
		reset: () => {
			setUploadFile(null);
		},
		upload: async (): Promise<Attachment | undefined> => {
			if (!uploadFile) return undefined;

			const result = await uploadFile(
				uploadFile.file,
				// eslint-disable-next-line no-loop-func
				(progress: any) => {
					setUploadFile({
						...uploadFile,
						start: true,
						percentComplete: progress.loaded / progress.total,
					});
				},
			);

			setUploadFile({
				...uploadFile,
				percentComplete: 1,	
				start: true,
				done: true,
			});

			return result;
		},
	}));

	return (
		
		<div className={className}>
			<Panel
				{...getRootProps()}
				className={`d-flex ${uploadFile ? 'filled' : ''} ${
					horizontal ? 'flex-row' : 'flex-column'
				} flex-fill justify-content-center align-items-center`}
			>
				<div>
					{uploadFile ? (
						<></>
					) : !isDragActive ? (
						<i className="font-sm text-muted" style={{ width: '28px', height: '28px' }}>
							<IconInbox style={{ width: '28px', height: '28px', margin: '0.5em' }} />
						</i>
					) : (
						<i className="font-sm text-muted" style={{ width: '28px', height: '28px' }}>
							<IconInboxAdd style={{ width: '28px', height: '28px', margin: '0.5em' }} />
						</i>
					)}
				</div>
				{!uploadFile ? (
					<div>
						<input {...getInputProps()} className="text-center" />
						<div className="font-sm text-center text-muted text-wrap">
							{isDragActive ? (

								<Text className="text-wrap"><br/><br/>Dosyaları buraya bırakın...</Text>
							) : (
								<Text className="text-wrap"><br/><br/>Dosyaları buraya sürükleyip bırakın veya tıklayın</Text>
							)}
						</div>
					</div>
				) : (
					<>
						{uploadFile && !uploadFile.start && (
							<div className="d-flex flex-row flex-fill p-0" style={{ height: '40px' }}>
								<a className="btn btn-link text-dark pl-0 flex-grow-1 text-left">{uploadFile?.fileName}</a>

								<button
									type="button"
									className="btn btn-light-global btn-icon btn-md"
									style={{ height: '40px', width: '40px' }}
									onClick={onCancel}
								>
									<i className="icon-cancel"></i>
								</button>
							</div>
						)}
						{uploadFile && uploadFile.start && !uploadFile.done && (
							<div className="font-sm text-center text-muted text-wrap">
								<div className="row justify-content-center p-1">
									<div className="progress bg-white" style={{ height: '1rem', width: '10rem' }}>
										<div
											className="progress-bar bg-global font-xs text-white text-center vertical-align-center"
											role="progressbar"
											style={{
												width: `${(uploadFile?.percentComplete * 100).toFixed(2)}%`,
											}}
											aria-valuenow={Math.round(uploadFile?.percentComplete * 100)}
											aria-valuemin={0}
											aria-valuemax={100}
										>{`${Math.round(uploadFile?.percentComplete * 100)}%`}</div>
									</div>
								</div>
							</div>
						)}
						{uploadFile && uploadFile.done && (
							<div className="d-flex flex-row flex-fill p-0" style={{ height: '40px' }}>
								<a className="btn btn-link text-dark pl-0 flex-grow-1 text-left">{uploadFile?.fileName}</a>

								<button type="button" className="btn btn-light-success btn-icon btn-md" style={{ height: '40px', width: '40px' }}>
									<i className="icon-checkmark"></i>
								</button>
							</div>
						)}
					</>
				)}
			</Panel>
		</div>
	);
});

export const FileUpload = styled(Dropzone)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius:4px;

	:after,
	:before {
		box-sizing: border-box;
		background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.02));
		background-position-x: initial;
		background-position-y: initial;
		background-size: initial;
		background-attachment: initial;
		background-origin: initial;
		background-clip: initial;
		background-color: transparent;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0.85;
	}

	& img {
		object-fit: contain;
		width: 5rem;
		height: 5rem;
		margin: 0.5rem;
		:before {
		}
	}
`;
