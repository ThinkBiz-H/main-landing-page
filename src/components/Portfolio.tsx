import { ExternalLink, Globe, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinanceFlow Dashboard',
      category: 'Enterprise Platform',
      type: 'web',
      description: 'Comprehensive financial management solution with real-time analytics for a leading Bahrain bank.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      title: 'Gulf Commerce Platform',
      category: 'E-commerce',
      type: 'web',
      description: 'Secure online marketplace with multi-currency support and regional payment integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    },
{
  title: 'HealthTrack Mobile',
  category: 'Healthcare App',
  type: 'mobile',
  description: 'HIPAA-compliant health tracking application with wearable device integration.',
  image: '/mobileapp.webp'
}


,{  
      title: 'PropertyHub Bahrain',
      category: 'Real Estate',
      type: 'web',
      description: 'Premium real estate listing platform with virtual tour integration for the Bahrain market.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    },
    {
      title: 'DeliverEase App',
      category: 'Logistics App',
      type: 'mobile',
      description: 'On-demand delivery solution with real-time tracking and fleet management.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    },
    {
      title: 'EduLearn LMS',
      category: 'Education Platform',
      type: 'web',
      description: 'Complete learning management system with video streaming for educational institutions.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-section-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            Proven Results Across{' '}
            <span className="gradient-text">Key Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our recent work demonstrating our commitment to quality, 
            innovation, and measurable client success.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-xl overflow-hidden border border-border card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <button className="btn-primary inline-flex items-center gap-2 w-fit">
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/90 backdrop-blur-sm">
                  {project.type === 'mobile' ? (
                    <Smartphone className="w-4 h-4 text-accent" />
                  ) : (
                    <Globe className="w-4 h-4 text-accent" />
                  )}
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl mb-2 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-outline inline-flex items-center gap-2">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
