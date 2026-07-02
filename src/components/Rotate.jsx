import React, { useEffect, useRef } from 'react';

export default function Rotate() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let isUpdating = false;
    const observer = new MutationObserver((mutations) => {
      if (isUpdating) return;
      
      const bg = el.style.backgroundColor;
      if (!bg) return;
      
      const match = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        
        // Map Webflow's 0-255 to 0-246, 0-244, 0-244 (#f6f4f4)
        const mappedR = Math.round((r / 255) * 246);
        const mappedG = Math.round((g / 255) * 244);
        const mappedB = Math.round((b / 255) * 244);
        
        isUpdating = true;
        el.style.backgroundColor = `rgb(${mappedR}, ${mappedG}, ${mappedB})`;
        
        // Allow Webflow to trigger the next mutation, but we ignore our own update
        Promise.resolve().then(() => { isUpdating = false; });
      }
    });

    observer.observe(el, { attributes: true, attributeFilter: ['style'] });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={sectionRef} style={{ backgroundColor: 'rgb(0,0,0)' }} className="rotate-sc">
        <div className="rotate-height">
          <div data-w-id="9daae68c-791a-b52b-db16-559b608e3973" className="rotate-subheight">
            <div className="rotate-sticky">
              <div className="container rotate-s">
                <div className="rotate-first-header">
                  <p data-w-id="242bd14e-aa7a-f2cc-a379-3f5c2ab017b3" style={{ color: 'rgb(255,255,255)' }} className="body-b2">What your preffered workout style?</p>
                  <div className="rotate-header-block-desktop">
                    <h2 data-w-id="b54c2ee7-2b37-b44e-8e91-1e4acf5e7c65" style={{ color: 'rgb(255,255,255)' }} className="heading-2">Choose</h2>
                    <div data-w-id="34a129a9-4ff7-e6d6-0c34-a9b7196a365e" className="header-space">
                    </div>
                    <h2 className="heading-2">your style <span className="rotate-span set-1">Home</span>
                      <span className="rotate-span set-2">Outdoor</span></h2>
                  </div>
                  <div className="rotate-header-block-mobile">
                    <h2 data-w-id="03db594e-16d3-a3fe-aa76-3ea06efa052a" style={{ color: 'rgb(255,255,255)' }} className="heading-3">Choose your
                      style<br /><span className="rotate-span set-1">Home</span><span className="rotate-span set-2"> Outdoor</span></h2>
                  </div>
                </div>
                <div className="rotate-cards-flexbox">
                  <div className="rotate-ellipse">
                    <div className="rotate-card card-1">
                      <div className="video-cover set-1 w-embed">
                        <div style={{ width: '100%', height: '100%' }} className="w-background-video w-background-video-atom">
                          <video className="card-video" autoPlay muted loop playsInline loading="lazy">
                            <source src="https://dl.dropboxusercontent.com/s/e7fsnz9e8g5ngwqvk0y8h/24632438_z7AqYnq4.mp4?rlkey=czo2p7d3v35fndfjongci6yqy&st=zoe1fcb1&dl=0" data-wf-ignore="true" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <div className="rotate-card card-2">
                      <div className="video-cover set-2 w-embed">
                        <div style={{ width: '100%', height: '100%' }} className="w-background-video w-background-video-atom">
                          <video className="card-video" autoPlay muted loop playsInline loading="lazy">
                            <source src="https://dl.dropboxusercontent.com/s/4kle801qkjkz0lw9qpjkt/24632437_cFlqNVLO.mp4?rlkey=ub4hte7ktze5658v66ci6axj8&st=5exnlo0e&dl=0" data-wf-ignore="true" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <div className="rotate-card card-3">
                      <div className="video-cover set-3 w-embed">
                        <div style={{ width: '100%', height: '100%' }} className="w-background-video w-background-video-atom">
                          <video className="card-video" autoPlay muted loop playsInline loading="lazy">
                            <source src="https://dl.dropboxusercontent.com/s/4r1qys3nvzx3y6q3qwewb/24632436_69jCgczl.mp4?rlkey=4va5qw8xmxil8tak52de7fu7e&st=nw71j49v&dl=0" data-wf-ignore="true" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <div className="rotate-card card-4">
                      <div className="video-cover set-4 w-embed">
                        <div style={{ width: '100%', height: '100%' }} className="w-background-video w-background-video-atom">
                          <video className="card-video" autoPlay muted loop playsInline loading="lazy">
                            <source src="https://dl.dropboxusercontent.com/s/qx0rp5f5h5bcoopp2b0d0/24632435_IdhNXXql.mp4?rlkey=bmthdyn0huc71pro38wa1twcw&st=wqm79hpd&dl=0" data-wf-ignore="true" />
                          </video>
                        </div>
                      </div>
                    </div>
                    <div className="rotate-card card-5" />
                  </div>
                </div>
                <div className="rotate-swap-headers-wrapper">
                  <div className="rotate-swap-icons">
                    <div data-w-id="8e411552-adb0-16bd-82e7-3a5c5b06588d" className="rotate-swap-icon">
                      <div className="swap-iocn"><img src="https://cdn.prod.website-files.com/667fa6c733097c1516bb9760/667fa6c733097c1516bb978d_swap-icon-2436.webp" loading="lazy" alt className="image-contain" /></div>
                    </div>
                    <div data-w-id="379bbc29-f9ea-385d-47af-e46ddc422dad" className="rotate-swap-icon">
                      <div className="swap-iocn"><img src="https://cdn.prod.website-files.com/667fa6c733097c1516bb9760/667fa6c733097c1516bb978a_swap-icon-2435.webp" loading="lazy" alt className="image-contain" /></div>
                    </div>
                    <div data-w-id="6fe3ae2b-1889-f5c0-4131-58531a49c9de" className="rotate-swap-icon">
                      <div className="swap-iocn"><img src="https://cdn.prod.website-files.com/667fa6c733097c1516bb9760/667fa6c733097c1516bb978b_swap-icon-2437.webp" loading="lazy" alt className="image-contain" /></div>
                    </div>
                    <div data-w-id="a77075ed-f1bf-7294-8ad5-21aa1b7a1896" className="rotate-swap-icon">
                      <div className="swap-iocn"><img src="https://cdn.prod.website-files.com/667fa6c733097c1516bb9760/667fa6c733097c1516bb978c_swap-icon-2438.webp" loading="lazy" alt className="image-contain" /></div>
                    </div>
                  </div>
                  <div className="rotate-swap-headers-frame">
                    <div className="rotate-swap-header-cell set-1">
                      <h3 className="heading-5">Outdoor workout</h3>
                      <p className="body-b2 gray-3">Elevate your fitness experience and embrace the
                        vitality of the great outdoors with invigorating outdoor workouts, where
                        every session becomes a breath of fresh air for your body and mind.</p>
                    </div>
                    <div className="rotate-swap-header-cell set-2">
                      <h3 className="heading-5">Gym workout</h3>
                      <p className="body-b2 gray-3">Transform your body and amplify your strength with
                        our state-of-the-art gym workouts, where every workout is a step closer
                        to your fitness goals.</p>
                    </div>
                    <div className="rotate-swap-header-cell set-3">
                      <h3 className="heading-5">Home workout</h3>
                      <p className="body-b2 gray-3">Achieve your fitness goals from the comfort of
                        your home with our dynamic and convenient home workout programs, making
                        wellness accessible whenever and wherever you are.</p>
                    </div>
                    <div className="rotate-swap-header-cell set-4">
                      <h3 data-w-id="ac9bb2b9-b9be-0ad3-52fc-c1cef36ab1d5" style={{ color: 'rgb(255,255,255)' }} className="heading-5">Cross workout</h3>
                      <p data-w-id="ac9bb2b9-b9be-0ad3-52fc-c1cef36ab1d7" style={{ color: 'rgb(255,255,255)' }} className="body-b2 gray-3">Unleash your full
                        potential with our cross-workout sessions, blending strength, agility,
                        and endurance training for a transformative fitness experience like
                        never before.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="exercises" className="rotate-anchor" />
          </div>
          <div data-w-id="380efe1b-0919-769f-b196-2b8173c9e797" className="color-anchor" />
        </div>
      </section>
    </>
  );
}
