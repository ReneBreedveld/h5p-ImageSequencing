var H5PPresave = H5PPresave || {};

/**
 * Resolve the presave logic for the content type Image Sequencing
 *
 * @param {object} content
 * @param finished
 * @constructor
 */
H5PPresave['H5P.ImageSequencing'] = function (content, finished) {
  var presave = H5PEditor.Presave;

  if (isContentInvalid()) {
    throw new presave.exceptions.InvalidContentSemanticsException('Invalid ImageSequencing Error')
  }

  var score = content.sequenceImages.length;

  presave.validateScore(score);

  finished({maxScore: score});

  /**
   * Check if required parameters is present
   * @return {boolean}
   */
  function isContentInvalid() {
    return !presave.checkNestedRequirements(content, 'content.sequenceImages') || !Array.isArray(content.sequenceImages);
  }
};
