import React, { useEffect } from 'react';

const ComicPanel = ({ text, index, images, setImages }) => {
  useEffect(() => {
    if (text) {
      query({ inputs: text }).then((imageBlob) => {
        const newImages = [...images];
        newImages[index] = URL.createObjectURL(imageBlob);
        setImages(newImages);
      });
    }
  }, [text, index, images, setImages]);

  return (
    <div className="comic-panel">
      {images[index] && <img src={images[index]} alt={`Comic panel ${index + 1}`} />}
    </div>
  );
};

async function query(data) {
    const response = await fetch(
		"https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
		{
			headers: { 
				"Accept": "image/png",
				"Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
				"Content-Type": "application/json" 
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}

export default ComicPanel;
