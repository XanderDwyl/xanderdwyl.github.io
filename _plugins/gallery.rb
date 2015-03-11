require 'jekyll'

module Jekyll
	class Gallery < Generator

		def generate(file)

			image = {}
			@file = file

			file.config['gallery_images'] = []

			Dir.foreach('./images/post') do |file|
				image['title'] = file.gsub(File.extname(file), '')
				image['file']  = file

				@file.config['gallery_images'].push image unless File.extname(file) == ''

			end
		end

	end
end
