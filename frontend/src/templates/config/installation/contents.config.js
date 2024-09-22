module.exports = {
  header: {
    right: '',
  },
  sidebar: {
    navMenuItems: [
      {
        text: 'دەربارە',
        link: './about.html',
        icon: 'contact_support',
      },
      {
        text: 'مەرجەکان',
        link: './terms.html',
        icon: 'description',
      },
      {
        text: 'پەیوەندی',
        link: './contact.html',
        icon: 'alternate_email',
      },
    ],
    belowNavMenu: null,
    footer: 'Powered by <a href="//demo.mediacms.io" title="mediacms.io" target="_blank">mediacms.io</a>',
  },
  uploader: {
    belowUploadArea: '',
    postUploadMessage: '',
  },
  notifications: {
    messages: {
      addToLiked: 'Added to liked media',
      removeFromLiked: 'Removed from liked media',
      addToDisliked: 'Added to disliked media',
      removeFromDisliked: 'Removed from disliked media',
    },
  },
};
