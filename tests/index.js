function requireAll(requireContext) {
  requireContext.keys().forEach(requireContext);
}

requireAll(require.context("../src", true, /\.test.(js|jsx)/));
